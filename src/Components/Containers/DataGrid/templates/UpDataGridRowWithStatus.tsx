import * as React from 'react'
import * as ReactDOM from 'react-dom'

import UpCheckbox from '../../../Inputs/Checkbox/UpCheckBox'
import UpButton from '../../../Inputs/Button'
import {IntentType} from '../../../../Common/theming/types'

import UpDataGridCell from '../UpDataGridCell'
import {Column, Row, Action} from '../UpDataGrid'
import UpDefaultCellFormatter from '../UpDefaultCellFormatter'

export interface UpDataGridRowWithStatusState {
    isSelected:boolean;
}

export interface UpDataGridRowWithStatusProps {
    item: any;
    columns:Array<Column>;
    actions:Array<Action>;
    isSelectionEnabled:boolean;
    onSelectionChange?: (row: Row) => void;
}

export default class UpDataGridRowWithStatus extends React.Component<UpDataGridRowWithStatusProps, UpDataGridRowWithStatusState> {

    static defaultProps : UpDataGridRowWithStatusProps = {
        isSelectionEnabled:true,
        item:{},
        columns:[],
        actions:[]
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            isSelected:false
        }
    }

    onSelectionChange = (isSelected) => {
        if(this.props.onSelectionChange) 
            this.props.onSelectionChange({isSelected : isSelected, value: this.props.item}) ;
    }


    render() {
        const formatter = new UpDefaultCellFormatter() ;
        const selection = <UpCheckbox options={[{name:"up-selection", checked:this.props.item.isSelected===true, value:true, onChange: this.onSelectionChange}]} /> ;
        
        return (
            <div className="up-data-grid-row" style={{background:"#234556"}}>
                {this.props.isSelectionEnabled && 
                    <UpDataGridCell key={"cell-selection"} item={{value : selection}} column={{label:"", formatter:formatter}} />
                }

                {this.props.columns.map((value, index)  => {
                    return <UpDataGridCell key={`cell-${index}`} item={this.props.item} column={value} />
                })}

                {this.props.actions && this.props.actions.length > 0 &&
                    <UpDataGridCell key={"cell-actions"} item={this.props.item} column={{label:"", isSortable:false}}>
                    {
                        this.props.actions.map((value, index)  => {
                            return <UpButton tooltip={value.description} key={`btn-${index}`} actionType={value.type} width="icon" intent={value.intent} onClick={
                                () => {
                                    if (value.action != null) {
                                        value.action(this.props.item)
                                    }
                                }
                            } />
                        })
                    }
                    </UpDataGridCell>
                }
            </div>
        )
    }
}