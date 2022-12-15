package main

import (
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
	"log"
	"os"
	database "server/db"
	"server/service"
	"time"
)

const port = 8000

func main() {
	fmt.Println("program start")

	if err := godotenv.Load(".env"); err != nil {
		log.Fatal(err)
	}

	// initialize DB connection
	dsn := database.DefaultDSN(
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"))
	if err := database.Connect(dsn); err != nil {
		log.Fatal(err)
	}

	db, err := database.GetConnection()
	if err != nil {
		log.Fatal(err)
	}

	userServer := service.UserServer{DB: db}

	// initialize Gin engine
	engine := gin.Default()
	// ここからCorsの設定
	engine.Use(cors.New(cors.Config{
		// アクセスを許可したいアクセス元
		AllowOrigins: []string{"*"},
		// アクセスを許可したいHTTPメソッド(以下の例だとPUTやDELETEはアクセスできません)
		AllowMethods: []string{"*"},
		// 許可したいHTTPリクエストヘッダ
		AllowHeaders: []string{"*"},
		// cookieなどの情報を必要とするかどうか
		AllowCredentials: true,
		// preflightリクエストの結果をキャッシュする時間
		MaxAge: 24 * time.Hour,
	}))

	// routing
	engine.GET("/", service.Home)
	engine.GET("/user", userServer.Test)

	// start server
	engine.Run(fmt.Sprintf(":%d", port))
}
