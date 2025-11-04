import os
import random
import string
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

# Folder to save PDFs
OUTPUT_DIR = "random_pdfs"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Function to generate random text
def random_text(length=100):
    letters = string.ascii_letters + string.digits + " "
    return "".join(random.choice(letters) for _ in range(length))

# Function to create one PDF file
def create_random_pdf(file_path, num_pages=None):
    if num_pages is None:
        num_pages = random.randint(1, 5)  # 1–5 pages per PDF
    
    c = canvas.Canvas(file_path, pagesize=A4)
    width, height = A4
    
    for page in range(num_pages):
        title = "Random PDF Page " + str(page + 1)
        c.setFont("Helvetica-Bold", 16)
        c.drawString(100, height - 100, title)
        
        # Random paragraph
        c.setFont("Helvetica", 12)
        for i in range(10):
            text = random_text(random.randint(50, 150))
            c.drawString(100, height - 150 - (i * 20), text)
        
        c.showPage()
    
    c.save()

# Generate N random PDFs
def generate_bulk_pdfs(count=10):
    for i in range(count):
        file_name = f"document_{i+1}_{random.randint(1000,9999)}.pdf"
        file_path = os.path.join(OUTPUT_DIR, file_name)
        create_random_pdf(file_path)
        print(f"Generated: {file_path}")

if __name__ == "__main__":
    num_files = int(input("How many random PDFs do you want to generate? (default 5): ") or 5)
    generate_bulk_pdfs(num_files)
    print(f"\n✅ {num_files} random PDF files created in '{OUTPUT_DIR}' folder.")
