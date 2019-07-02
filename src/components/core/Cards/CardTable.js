import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import React, { Component } from "react";
import { dataTables } from './CardTablesData';

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardBody
} from "reactstrap";

   

class CardTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTable: dataTables,
      data:[]
    }
  }


  render() {
    


      
    return (
      <React.Fragment>
        
        <div className="col-md-6">
          <Card className="card-table">
            <CardHeader className="orange">
            
                  <CardTitle>Employees Stats</CardTitle>
                  <CardSubtitle>New employees on 15th September, 2016</CardSubtitle>
            </CardHeader>
            <CardBody>
              <BootstrapTable stripped data={dataTables}  hover  options={ { noDataText: 'This is custom text for empty data' } } bordered={ false }>
                <TableHeaderColumn isKey dataField="id">
                  ID
                </TableHeaderColumn>
                <TableHeaderColumn dataField="name">
                  Name
                </TableHeaderColumn>
                <TableHeaderColumn dataField="salary">
                  Salary
                </TableHeaderColumn>
                <TableHeaderColumn dataField="country">
                  Country
                </TableHeaderColumn>
              </BootstrapTable>
            </CardBody>

            <CardFooter />
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default CardTableContainer;
