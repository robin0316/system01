from fastapi import FastAPI
import psycopg2
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="retail",
        user="retail_h",
        password="0611"
    )

@app.get("/products")
def get_products():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""SELECT P.PRODUCT_ID,P.PRODUCT_NAME,D.DEPARTMENT,A.AISLE,PM.ORI_PRICE, PM.COST, PM.DISCOUNT,PM.STATUS
                    FROM PRODUCTS_RAW P 
                    LEFT JOIN DEPARTMENTS_RAW D
                    ON P.DEPARTMENT_ID = D.DEPARTMENT_ID
                    LEFT JOIN AISLES_RAW A
                    ON P.AISLE_ID = A.AISLE_ID
                    LEFT JOIN PRODUCT_MARKET PM
                    ON P.PRODUCT_ID = PM.PRODUCT_ID;""")
    rows = cursor.fetchall()

    columns = [desc[0] for desc in cursor.description]

    result = []
    for row in rows:
        result.append(dict(zip(columns, row)))

    cursor.close()
    conn.close()

    return result