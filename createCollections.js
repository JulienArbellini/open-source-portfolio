// Connect to the database
db = connect("mongodb+srv://juletmoula:password@cluster0.wfgoo.mongodb.net/Portfolio");
// Create the collections
db.createCollection("projects");
db.createCollection("certifications");
db.createCollection("experiences");
db.createCollection("techstacks");
db.createCollection("admin");

print("Collections created successfully!");