from pydantic import BaseModel

class BugBase(BaseModel):
    title: str
    description: str
    priority: str
    

class BugCreate(BugBase):
    pass

class Bug(BugBase):
    id: int

class BugUpdate(BaseModel):
    title: str
    description: str
    priority: str
    resolved: bool

    class Config:
        orm_mode = True