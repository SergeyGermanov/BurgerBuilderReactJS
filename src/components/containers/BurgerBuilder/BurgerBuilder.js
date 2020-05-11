import React, { Component } from "react";
import Auxilary from '../../../hoc/Auxilary';
import Burger from '../../Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render() {
        return (
            <div>
                <Auxilary>
                    <Burger ingredients={this.state.ingredients} />
                    <div>
                        Build Controls
                    </div>
                </Auxilary>
            </div>
        );
    }
}

export default BurgerBuilder;