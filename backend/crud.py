from sqlalchemy.orm import Session
import models, schemas

def get_bugs(db: Session):
    return db.query(models.Bug).all()

def create_bug(db: Session, bug: schemas.BugCreate):
    db_bug = models.Bug(**bug.dict())
    db.add(db_bug)
    db.commit()
    db.refresh(db_bug)
    return db_bug

def update_bug(db: Session, bug_id: int, bug: schemas.BugUpdate):
    db_bug = db.query(models.Bug).filter(models.Bug.id == bug_id).first()
    if db_bug is None:
        return None
    db_bug.title = bug.title
    db_bug.description = bug.description
    db_bug.priority = bug.priority
    db_bug.resolved = bug.resolved
    db.commit()
    db.refresh(db_bug)
    return db_bug

def delete_bug(db: Session, bug_id: int):
    bug = db.query(models.Bug).filter(models.Bug.id == bug_id).first()
    if bug:
        db.delete(bug)
        db.commit()
        return bug
    return None