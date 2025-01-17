package initialize

import (
	"crm/global"
	"fmt"

	"github.com/spf13/viper"
)

func LoadConfig() {
	viper := viper.New()
	viper.AddConfigPath("./configs")
	viper.SetConfigName("local")
	viper.SetConfigType("yaml")

	err := viper.ReadInConfig()
	if err != nil {
		panic((fmt.Errorf("Failed to read configuration")))
	}

	if err := viper.Unmarshal(&global.Config); err != nil {
		fmt.Printf("Unable to decode configuration %v", err)
	}
}
