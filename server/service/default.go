package service

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func Home(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{"message": "hello"})
}

// Error returns a handler which renders error.html
func Error(code int, message string) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		ctx.JSON(code, gin.H{"Code": code, "Error": message})
	}
}
