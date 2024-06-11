<h1>Express RESTful API</h1>
  <p>This is a simple RESTful API built with Express.js that handles user data from a JSON file. It provides endpoints to create, read, update, and delete users.</p>
 <h2>Getting Started</h2>

  <h3>Prerequisites</h3>
    <p>Ensure Node.js is installed on your machine.</p>

  <h3>Installation</h3>
    <ol>
        <li>Clone the repository from GitHub.</li>
        <li>Navigate to the project directory.</li>
        <li>Install the necessary dependencies.</li>
        <li>Create a <code>MOCK_DATA.json</code> file in the project root directory and populate it with initial user data.</li>
    </ol>

  <h3>Running the Server</h3>
    <p>Start the server using your preferred method (e.g., using Node.js).</p>
    <p>The server will start on <code>http://localhost:8000</code>.</p>

  <h2>API Endpoints</h2>
    <ul>
        <li><strong>GET /api/users</strong>: Retrieve all users.</li>
        <li><strong>GET /api/users/:id</strong>: Retrieve a user by ID.</li>
        <li><strong>POST /api/users</strong>: Create a new user.</li>
        <li><strong>PATCH /api/users/:id</strong>: Update a user by ID.</li>
        <li><strong>DELETE /api/users/:id</strong>: Delete a user by ID.</li>
    </ul>

  <h2>Frontend</h2>
    <ul>
        <li><strong>GET /users</strong>: Display a list of users in HTML format.</li>
    </ul>

   <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>
