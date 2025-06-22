const { createClient } = require("@supabase/supabase-js");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

// Load environment variables from .env.local
function loadEnvLocal() {
  try {
    const envPath = path.join(process.cwd(), ".env.local");
    const envContent = fs.readFileSync(envPath, "utf8");

    envContent.split("\n").forEach((line) => {
      const [key, ...valueParts] = line.split("=");
      if (key && valueParts.length > 0) {
        let value = valueParts.join("=").trim();
        // Remove surrounding quotes if present
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }
        process.env[key.trim()] = value;
      }
    });
  } catch (error) {
    console.log("No .env.local file found or error reading it");
  }
}

loadEnvLocal();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error(
    "Please set SUPABASE_URL and SUPABASE_SERVICE_KEY environment variables"
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createUser(email, password, name) {
  try {
    // Hash the password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Insert user into the database
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          email: email,
          password_hash: passwordHash,
          name: name || null,
        },
      ])
      .select();

    if (error) {
      console.error("Error creating user:", error);
      return false;
    }

    console.log("User created successfully:", data[0]);
    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

// Example usage
async function main() {
  const email = process.argv[2];
  const password = process.argv[3];
  const name = process.argv[4];

  if (!email || !password) {
    console.log("Usage: node create-user.js <email> <password> [name]");
    console.log(
      'Example: node create-user.js test@example.com password123 "Test User"'
    );
    process.exit(1);
  }

  console.log(`Creating user with email: ${email}`);
  const success = await createUser(email, password, name);

  if (success) {
    console.log("✅ User created successfully!");
  } else {
    console.log("❌ Failed to create user");
  }
}

main();
