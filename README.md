      "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
        "start:prod": "cd mashroom-backend && npm run start",
        "start:dev": "concurrently \"npm run mashroom-backend\" \"npm run mashroom-frontend\" -k",
        "frontend": "cd mashroom-frontend && npm run start",
        "backend": "cd mashroom-backend && node api.js",
        "install": "cd mashroom-frontend && npm install && cd ../mashroom-backend && npm install",
        "build": "cd mashroom-frontend && npm run build"



        "start-frontend" : "cd mashroom-frontend && npm run start