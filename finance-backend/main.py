from fastapi import FastAPI
from pydantic import BaseModel
import random
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this in production!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Transaction(BaseModel):
    description: str
    amount: float


# Mock AI-powered categorization
categories = ["Food", "Transport", "Rent", "Entertainment", "Bills"]


@app.post("/categorize")
def categorize_expense(transaction: Transaction):
    category = random.choice(categories)  # Replace with ML Model
    return {"description": transaction.description, "category": category}


@app.get("/")
def home():
    return {"message": "Smart Finance Assistant API Running"}
