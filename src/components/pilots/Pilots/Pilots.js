import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PilotList from '../PilotList/PilotList';
import PilotDetails from '../PilotDetails/PilotDetails';
import FilterInputWithType from '../../FilterInputWithType/FilterInputWithType';
import Pagination from '../../Pagination/Pagination';
import ItemsCount from '../../ItemsCount/ItemsCount';

import * as pilotsActions from '../actions';
import * as paginationActions from '../../pagination-count/actions';
import { getFilter, getQuery, selectPilotList, selectPageCount } from '../selectors';
import { ITEMS_COUNT } from '../constants';
import { sliceBy } from '../service';

export class Pilots extends Component {
  state = {
    activePilot: {}
  }

  componentDidMount() {
    this.props.actions.loadPilots(() => {
      // Note: info loaded, do some magic if you want to
    });
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
            <ItemsCount count={ITEMS_COUNT} label="Items on page" activeValue={this.props.itemsCount} onSelect={this.selectItemsCount} />
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
    itemsCount: state.paginationInfo.itemsCount,
    activePage: state.paginationInfo.activePage,
    activeId: state.pilotsInfo.activeID,
    pilots: selectPilotList(state),
    filter: getFilter(state),
    query: getQuery(state),
    pageCount: selectPageCount(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({ ...pilotsActions, ...paginationActions }, dispatch)
  }
};

Pilots = connect(mapStateToProps, mapDispatchToProps)(Pilots);

export default Pilots;
