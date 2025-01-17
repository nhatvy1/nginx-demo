package settings

type Config struct {
	PostgreSQL PostgreSQLSetting `mapstructure:"postgres"`
}

type PostgreSQLSetting struct {
	Host     string `mapstructure:"host"`
	Port     int    `mapstructure:"port"`
	User     string `mapstructure:"user"`
	Password string `mapstructure:"password"`
	DbName   string `mapstructure:"dbName"`
}
