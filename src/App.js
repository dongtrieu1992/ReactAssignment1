import {Component} from "react";
import Menu from './components/StaffComponent';
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import {STAFFS} from './shared/staffs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dishes: STAFFS,
        };
      }
   render(){
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="fluid-container">
                        <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}/>
            </div>
        );
    }
}
export default App;