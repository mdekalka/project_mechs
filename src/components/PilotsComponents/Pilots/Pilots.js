import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PilotList from '../PilotList/PilotList';
import PilotDetails from '../PilotDetails/PilotDetails';
import FilterInputWithType from '../../FilterInputWithType/FilterInputWithType';
import Pagination from '../../Pagination/Pagination';
import ItemsCount from '../../ItemsCount/ItemsCount';

import { pilotsConstants, pilotsActions, pilotsSelectors } from '../../../re-ducks/pilots';
import { inputFiltersActions } from '../../../re-ducks/inputFilters';

export class Pilots extends Component {
  state = {
    activePilot: {}
  }

  componentDidMount() {
    this.props.actions.loadPilots();
  }

  selectPilot = (id) => {
    if (this.props.activeId !== id) {
      this.props.actions.setActiveId(id);
    }
  }

  selectPage = (index) => {
    this.props.actions.setCurrentPage(index);
  }

  selectItemsCount = (value) => {
    this.props.actions.setItemsCount(value);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <div className="form-row">
                  <FilterInputWithType />
                </div>
              </div>
            </div>
            <ItemsCount count={pilotsConstants.ITEMS_COUNT} label="Items on page" activeValue={this.props.itemsCount} onSelect={this.selectItemsCount} />
            <Pagination activePage={this.props.activePage} onSelect={this.selectPage} pageCount={this.props.pageCount} />
            {this.props.pilots.length
              ? <PilotList selected={this.props.activeId} onSelect={this.selectPilot} list={this.props.pilots} />
              : <div>No results based on filter query</div>
            }
          </div>
          <div className="col-md-4">
            <PilotDetails />
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    itemsCount: state.filterInfo.itemsCount,
    activePage: state.filterInfo.activePage,
    activeId: state.pilotsInfo.activeID,
    pilots: pilotsSelectors.selectPilotsSliced(state),
    filter: pilotsSelectors.getFilter(state),
    query: pilotsSelectors.getQuery(state),
    pageCount: pilotsSelectors.selectPageCount(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({ ...pilotsActions, ...inputFiltersActions }, dispatch)
  }
};

Pilots = connect(mapStateToProps, mapDispatchToProps)(Pilots);

export default Pilots;
