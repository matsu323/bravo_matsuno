package service

import (
	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
	"net/http"
	"server/db"
)

type UserServer struct {
	DB *sqlx.DB
}

func (us *UserServer) Test(ctx *gin.Context) {
	var user db.User
	if err := us.DB.Get(&user, "SELECT * FROM users where id = 1"); err != nil {
		Error(http.StatusInternalServerError, err.Error())(ctx)
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"id": user.ID, "name": user.Name})
}
