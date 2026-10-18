web_action — GitHub Actions + GitHub Pages Lab
ชื่อ: ภูตะวัน สมคุณ | รหัสนิสิต: 67160362

เว็บไซต์ Static (HTML/CSS/JavaScript) ที่ Deploy อัตโนมัติไปยัง GitHub Pages ด้วย GitHub Actions

Website: https://67160362.github.io/webdev-actions/
Workflow: .github/workflows/deploy.yml
Exercise 4: Workflow ทำงานอย่างไร
Workflow จะเริ่มเมื่อมีการ push ไปยัง branch main หรือกดรันเองจากแท็บ Actions (workflow_dispatch) Job deploy จะรันบนเครื่อง ubuntu-latest โดย (1) Checkout โค้ด (2) ตรวจว่ามี index.html, style.css, script.js (3) ตั้งค่า Pages (4) อัปโหลดไฟล์ทั้งโฟลเดอร์เป็น Artifact และ (5) Deploy Artifact นั้นขึ้น GitHub Pages
