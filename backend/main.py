import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client
from dotenv import load_dotenv

# 1. Cargar variables de entorno
load_dotenv()

app = FastAPI(title="Marcos Bernard Portfolio API")

# 2. Configuración de CORS (Vital para que tu frontend en GitHub Pages pueda leer la API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción cambiaremos esto por tu dominio de GitHub Pages
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. Inicializar Cliente de Supabase
url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_PUBLIC_KEY")
supabase: Client = create_client(url, key)

@app.get("/")
def read_root():
    return {"status": "online", "message": "API de Portafolio Bernard funcionando"}

@app.get("/projects")
def get_projects():
    try:
        # Consultamos todos los proyectos de la tabla
        response = supabase.table("projects").select("*").order("created_at").execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)