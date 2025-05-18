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
      
      // Parse CSV manually
      const rows = fileContent.split("\n");
      
      // Map CSV headers to expected property names
      const headerMap: Record<string, keyof Service> = {
        "Nome": "nome",
        "Duração (min)": "duracao",
        "Preço": "preco",
        "Profissional responsável": "profissional", 
        "Categoria": "categoria",
        "Ativo/Inativo": "ativo",
        "Descrição": "descricao"
      };
      
      const services: Service[] = [];
      
      // Start from row 1 (skipping headers) and exclude empty rows
      for (let i = 1; i < rows.length; i++) {
        if (rows[i].trim() === "") continue;
        
        // Simple CSV parsing (assumes no commas in data fields)
        const rowValues = rows[i].split(',');
        
        if (rowValues.length >= 7) {
          const service: any = {
            nome: rowValues[0].trim(),
            duracao: rowValues[1].trim(),
            preco: rowValues[2].trim().replace('"', '').replace('"', ''),
            profissional: rowValues[3].trim(),
            categoria: rowValues[4].trim(),
            ativo: rowValues[5].trim(),
            descricao: rowValues[6].trim().replace('"', '').replace('"', '')
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
