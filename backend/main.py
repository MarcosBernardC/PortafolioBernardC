import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client
from dotenv import load_dotenv

# 1. Cargar variables de entorno
load_dotenv()

app = FastAPI(title="Marcos Bernard Portfolio API")

# 2. Configuración de CORS
origins = [
    "http://localhost:5500", 
    "http://127.0.0.1:5500",
    "https://marcosbernardc.github.io" # Tu URL real de GitHub Pages
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, # Aquí inyectamos la lista
    allow_credentials=True,
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

# Cambia el host en el bloque final para que sea compatible con la nube
if __name__ == "__main__":
    import uvicorn
    # Render asigna el puerto automáticamente mediante una variable de entorno
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)