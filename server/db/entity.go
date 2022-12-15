package db

type User struct {
	ID           uint64 `db:"id"`
	Name         string `db:"name"`
	PasswordHash []byte `db:"password_hash"`
}
