from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import models, schemas, crud
from database import engine, SessionLocal

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/bugs")
def read_bugs(db: Session = Depends(get_db)):
    return crud.get_bugs(db)

@app.post("/bugs")
def create_bug(bug: schemas.BugCreate, db: Session = Depends(get_db)):
    return crud.create_bug(db, bug)

@app.put("/bugs/{bug_id}", response_model=schemas.Bug)
def update_bug(bug_id: int, bug: schemas.BugUpdate, db: Session = Depends(get_db)):
    db_bug = crud.update_bug(db, bug_id, bug)
    if db_bug is None:
        raise HTTPException(status_code=404, detail="Bug not found")
    return db_bug

@app.delete("/bugs/{bug_id}")
def delete_bug(bug_id: int, db: Session = Depends(get_db)):
    db_bug = crud.delete_bug(db, bug_id)
    if db_bug is None:
        raise HTTPException(status_code=404, detail="Bug not found")
    return db_bug