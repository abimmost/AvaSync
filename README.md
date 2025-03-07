# AvaSync
Profile create and update web app with Laravel Breeze
=======

AvaSync is a web application designed to manage user profiles, allowing users to update their profile picture, name, email, and password. Built with **Laravel Breeze** and the **Blade with Alpine.js** stack, AvaSync provides a seamless and intuitive user experience for profile management.

This project is ideal for programmers interested in exploring Laravel-based web applications, profile management systems, or contributing to an open-source project.

---

## Setup Instructions for Windows

To set up AvaSync on your local machine, follow these steps. This guide assumes you are using **XAMPP** (Apache and MySQL) as your local server environment.

### Prerequisites
1. **XAMPP** installed and running (Apache and MySQL).
2. **Composer** installed (for dependency management).
3. **Node.js** installed (for frontend asset compilation).
4. **Git** installed (for cloning the repository).

---

### Step 1: Install XAMPP and Start Apache and MySQL
1. Download and install [XAMPP](https://www.apachefriends.org/index.html).
2. Start the **Apache** and **MySQL** services from the XAMPP Control Panel.

---

### Step 2: Install Composer
1. Download and install [Composer](https://getcomposer.org/).
2. During installation, check the box to **Add `C:\xampp\php\php.exe` to PATH**.

---

### Step 3: Install Node.js
1. Download and install [Node.js](https://nodejs.org/).
2. Verify the installation by running the following commands in Command Prompt:
   ```bash
   node -v
   npm -v
   ```

---

### Step 4: Clone or Download the Repository
Clone the repository to your local machine using Git:
```bash
git clone https://github.com/your-username/AvaSync.git
```
Alternatively, download the repository as a ZIP file and extract it to your desired location.

---

### Step 5: Navigate to the Project Folder
Open Command Prompt and navigate to the project folder:
```bash
cd path\to\AvaSync
```

---

### Step 6: Install Dependencies
1. Install Node.js dependencies:
   ```bash
   npm install
   ```
   - If you encounter permission issues, open **Windows PowerShell (Administrator)** and run:
     ```powershell
     Set-ExecutionPolicy RemoteSigned
     ```
     Choose **Y** when prompted, then retry the `npm install` command.

2. Install Composer dependencies:
   ```bash
   composer install
   ```

---

### Step 7: Set Up Environment Configuration
1. Create a `.env` file by copying the `.env.example` file:
   ```bash
   cp .env.example .env
   ```
2. Generate an application key for secure encryption and decryption:
   ```bash
   php artisan key:generate
   ```
3. Create a symbolic link for the storage folder:
   ```bash
   php artisan storage:link
   ```

---

### Step 8: Create a Database
1. Open **phpMyAdmin** (or your preferred MySQL client).
2. Create a new database for the project (e.g., `avasync`).

---

### Step 9: Configure the `.env` File
1. Open the `.env` file in a text editor.
2. Update the database configuration settings:
   ```env
   DB_DATABASE=avasync
   DB_USERNAME=root
   DB_PASSWORD=
   ```
   - Replace `avasync` with the name of the database you created.
   - If your database has a username and password, update `DB_USERNAME` and `DB_PASSWORD` accordingly.
3. Set the `FILESYSTEM_DISK` to `public`:
   ```env
   FILESYSTEM_DISK=public
   ```

---

### Step 10: Run Migrations and Compile Assets
1. Run the database migrations to set up the required tables:
   ```bash
   php artisan migrate
   ```
2. Compile the frontend assets:
   ```bash
   npm run dev
   ```
3. Build the production-ready assets:
   ```bash
   npm run build
   ```

---

### Step 11: Start the Application
1. Start the development server:
   ```bash
   php artisan serve
   ```
   This will start the application at `http://localhost:8000`.

---

### Step 12: Access the Application
Open your browser and navigate to `http://localhost:8000`. You should now see the AvaSync application running locally.

---

## Contributing
Contributions are welcome! If you'd like to contribute to AvaSync, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your branch.
4. Submit a pull request with a detailed description of your changes.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Support
If you encounter any issues or have questions, feel free to open an issue on the GitHub repository.

---

Thank you for using AvaSync! Happy coding! 🚀

---

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
