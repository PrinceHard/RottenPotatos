from flask import Flask, jsonify
import mysql.connector as mysql

servico = Flask(__name__)

IS_ALIVE = "yes"
DEBUG = True

MYSQL_SERVER = "bancodados"
MYSQL_USER = "root"
MYSQL_PASS = "admin"
MYSQL_BANCO = "rotten"


def get_conexao_bd():
    conexao = mysql.connect(
        host=MYSQL_SERVER, user=MYSQL_USER, password=MYSQL_PASS, database=MYSQL_BANCO)

    return conexao


@servico.route("/serie/<int:id>")
def get_series(id):
    serie = {}

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select serie.title, serie.released, serie.genre, serie.plot, serie.poster, serie.imdb_rating " +
        "from serie " +
        "where id = "+ str(id)+
        " order by title "
    )   
    serie = cursor.fetchone()

    return jsonify(serie)


if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=DEBUG
    )
