import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import { Service } from "../client/src/lib/services";

export async function registerRoutes(app: Express): Promise<Server> {
  // API to get services from CSV
  app.get("/api/services", async (req, res) => {
    try {
      const csvPath = path.resolve(process.cwd(), "attached_assets/estudio inara.csv");
      const fileContent = fs.readFileSync(csvPath, "utf8");
      
      // Definição das colunas esperadas
      const expectedColumns = ["Nome", "Duração (min)", "Preço", "Profissional responsável", "Categoria", "Ativo/Inativo", "Descrição"];
      
      // Dividir o arquivo em linhas
      const rows = fileContent.split('\n');
      
      // Processar serviços
      const services: Service[] = [];
      
      // Pular o cabeçalho e processar as linhas de dados
      for (let i = 1; i < rows.length; i++) {
        const line = rows[i].trim();
        if (line === '') continue;
        
        // Extrair os campos
        let fields: string[] = [];
        let currentValue = '';
        let insideQuotes = false;
        
        for (let j = 0; j < line.length; j++) {
          const char = line[j];
          
          if (char === '"') {
            insideQuotes = !insideQuotes;
          } else if (char === ',' && !insideQuotes) {
            fields.push(currentValue);
            currentValue = '';
          } else {
            currentValue += char;
          }
        }
        
        // Adicionar o último campo
        fields.push(currentValue);
        
        // Verificar se temos todos os campos necessários
        if (fields.length >= 7) {
          const service: Service = {
            nome: fields[0].trim(),
            duracao: fields[1].trim(),
            preco: fields[2].trim().replace(/"/g, ''),
            profissional: fields[3].trim(),
            categoria: fields[4].trim(),
            ativo: fields[5].trim(),
            descricao: fields[6].trim().replace(/"/g, '')
          };
          
          services.push(service);
        }
      }
      
      res.json(services);
    } catch (error) {
      console.error("Error reading CSV file:", error);
      res.status(500).json({ error: "Failed to load services" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
