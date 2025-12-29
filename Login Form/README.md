# Login Form (Flask)

Simple Flask app that provides a basic register/login flow using SQLite and Werkzeug password hashing. This repo contains a minimal UI using Bootstrap (via CDN).

## Requirements
- Python 3.10+
- See `requirements.txt` for Python packages

## Quick setup (Windows - cmd)

1. Create and activate a virtual environment:

```cmd
python -m venv venv
venv\Scripts\activate
```

2. Install dependencies:

```cmd
pip install -r requirements.txt
```

3. Run the app:

```cmd
set FLASK_APP=app.py
set FLASK_ENV=development
flask run
```

Or run directly:

```cmd
python app.py
```

The app will create `data.db` automatically on first run.

## Project structure

- `app.py` — Flask application and DB init
- `templates/` — HTML templates (`index.html`, `register.html`)
- `static/` — CSS and JS assets

## Notes
- Replace `app.secret_key` in `app.py` with a secure random value before deploying.
- This project is intended as a learning example; do not use as-is in production without proper security hardening.

## Optional: Local congratulations GIF
If you want the congratulations animation to appear directly on the `/welcome` page, download the GIF and save it as `static/oia-uia.gif`.

- Example (download via browser and place in `static/`):

	- Save the GIF as `static/oia-uia.gif`.

If the local file is missing, the page will show a button linking to the Tenor page: https://tenor.com/en-GB/view/oia-uia-oia-cat-uia-cat-catcultclassics-gif-12805916815008299407
