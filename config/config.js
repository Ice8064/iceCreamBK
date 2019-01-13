const development = {
    "ice_db": {
        "database": "ice",
        "dialect": "mysql",
        "host": "127.0.0.1",
        "password": "321",
        "port": "3306",
        "user": "root"
    },
    "ice_redis": {
        "db": 1,
        "host": "127.0.0.1",
        "port": 6379,
        "ttl": 604800
    },
    "system_port": 8909
};

const production = {
    "ice_db": {
        "database": "ice",
        "dialect": "mysql",
        "host": "127.0.0.1",
        "password": "123456",
        "port": "3306",
        "user": "root"
    },
    "ice_redis": {
        "db": 1,
        "host": "127.0.0.1",
        "port": 6379,
        "ttl": 604800
    },
    "system_port": 8909
};

module.exports = {development, production}[process.env.NODE_ENV];
