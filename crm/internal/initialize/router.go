package initialize

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	r := gin.Default()

	v1 := r.Group("/api/v1")
	{
		v1.GET("/ping", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
		v1.GET("/ping-pong", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong ping",
			})
		})
	}
	return r
}
