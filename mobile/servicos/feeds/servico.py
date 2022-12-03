from flask import Flask, jsonify
import mysql.connector as mysql

servico = Flask(__name__)

IS_ALIVE = "yes"
DEBUG = True
TAMANHO_PAGINA = 4

MYSQL_SERVER = "bancodados"
MYSQL_USER = "root"
MYSQL_PASS = "admin"
MYSQL_BANCO = "rotten"


def get_conexao_bd():
    conexao = mysql.connect(
        host=MYSQL_SERVER, user=MYSQL_USER, password=MYSQL_PASS, database=MYSQL_BANCO)

    return conexao


@servico.route("/series/<int:pagina>/<int:qtd_card>")
def get_series(pagina, qtd_card):
    series = []

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select serie.id, serie.poster " +
        "from serie " +
        "order by title " +
        "limit " + str((pagina - 1) * qtd_card) + ", " + str(qtd_card))
    series = cursor.fetchall()

    return jsonify(series)

@servico.route("/pesquisar/<string:nome>")
def pesquisar_serie(nome):
    serie = {}

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select serie.id, serie.poster " +
        "from serie " +
        "where title like '%"+str(nome)+"%'"+
        "order by title "
    ) 
    serie = cursor.fetchone()

    return jsonify(serie)


if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=DEBUG
    )
