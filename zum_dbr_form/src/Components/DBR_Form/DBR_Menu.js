import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";

export default class DBRMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  }

  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th colSpan={3}>District Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th size="sm">Time Started</th>
            <th>Time Stopped</th>
            <th>HOURS</th>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan={2}>Total Hours</td>
            <td></td>
          </tr>
        </tbody>
        <Dropdown></Dropdown>
      </Table>
    );
  }
}
