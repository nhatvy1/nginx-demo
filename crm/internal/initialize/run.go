package initialize

func Run() {
	LoadConfig()
	r := InitRouter()

	r.Run("localhost:8000")
}
