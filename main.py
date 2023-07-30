from fastapi import FastAPI, Request, Form, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from app.api import calculate_rentability

app = FastAPI()
templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/rentability/", response_class=HTMLResponse)
async def calculate_rentability_post(
    request: Request,
    rent_amount: float = Form(...),
    property_purchase_amount: float = Form(...),
    property_appreciation_rate: float = Form(...),
    rental_interest_rate: float = Form(...),
    investment_interest_rate: float = Form(...),
):
    try:
        result = calculate_rentability(
            rent_amount,
            property_purchase_amount,
            property_appreciation_rate,
            rental_interest_rate,
            investment_interest_rate,
        )
        return templates.TemplateResponse("index.html", {"request": request, "result": result})
    except ValueError as ve:
        raise HTTPException(status_code=400, detail=str(ve))