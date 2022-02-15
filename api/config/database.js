const path = require("path");
const config = require("platformsh-config").config();

let dbRelationship = "mysqldatabase";

// Strapi default sqlite settings.
let connection = {
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        process.env.DATABASE_FILENAME || ".tmp/data.db"
      ),
    },
    useNullAsDefault: true,
  },
};

if (config.isValidPlatform() && !config.inBuild()) {
  // Platform.sh database configuration.
  const credentials = config.credentials(dbRelationship);
  console.log(
    `Using Platform.sh configuration with relationship ${dbRelationship}.`
  );

  connection = {
    connection: {
      client: "mysql",
      connection: {
        host: credentials.ip,
        port: credentials.port,
        database: credentials.path,
        user: credentials.username,
        password: credentials.password,
        ssl: false,
      },
      debug: false,
    },
  };
} else {
  if (config.isValidPlatform()) {
    // Build hook configuration message.
    console.log(
      "Using default configuration during Platform.sh build hook until relationships are available."
    );
  } else {
    // Strapi default local configuration.
    console.log(
      "Not in a Platform.sh Environment. Using default local sqlite configuration."
    );
  }
}

console.log(connection);

// export strapi database connection
module.exports = ({ env }) => connection;
