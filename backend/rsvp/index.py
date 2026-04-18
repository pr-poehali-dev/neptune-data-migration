"""
RSVP-обработчик: принимает подтверждение присутствия гостя и отправляет письмо на ninadima_06_2026@mail.ru
"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"})}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    attending = body.get("attending", "")
    guests = body.get("guests", 1)
    message = body.get("message", "").strip()

    if not name or attending not in ("yes", "no"):
        return {"statusCode": 400, "headers": headers, "body": {"error": "Missing required fields"}}

    attending_text = "✅ Придёт" if attending == "yes" else "❌ Не сможет прийти"
    guests_text = f"{guests} {'гость' if guests == 1 else 'гостя'}" if attending == "yes" else "—"

    email_body = f"""
Новый ответ на приглашение!

Имя: {name}
Статус: {attending_text}
Гостей: {guests_text}
Пожелание: {message or '(не указано)'}
"""

    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    email_address = "ninadima_06_2026@mail.ru"

    msg = MIMEMultipart()
    msg["From"] = email_address
    msg["To"] = email_address
    msg["Subject"] = f"RSVP: {name} — {attending_text}"
    msg.attach(MIMEText(email_body, "plain", "utf-8"))

    with smtplib.SMTP_SSL("smtp.mail.ru", 465) as server:
        server.login(email_address, smtp_password)
        server.send_message(msg)

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }