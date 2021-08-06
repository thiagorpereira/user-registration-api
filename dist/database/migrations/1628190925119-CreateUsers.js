"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUsers1628190925119 = void 0;

var _typeorm = require("typeorm");

class CreateUsers1628190925119 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "users",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "code",
        type: "varchar"
      }, {
        name: "name",
        type: "varchar"
      }, {
        name: "birth_date",
        type: "timestamp"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("users");
  }

}

exports.CreateUsers1628190925119 = CreateUsers1628190925119;