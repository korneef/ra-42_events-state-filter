import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      selected: 'All',
    }
    this.projects = this.props.projects;
  }

  getFilters(projects) {
    const filter = new Set()
    filter.add('All')
    projects.forEach(element => filter.add(element.category))
    this.setState({
      filters: Array.from(filter)
    })
  }

  onSelectFilter = (filter) => {
    if (filter === this.state.selected) {
      return
    }
    this.setState({
      selected: filter
    })
  }

  componentDidMount() {
    this.getFilters(this.projects);
  }

  render() {
    return (
      <>
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          onSelectFilter={item => this.onSelectFilter(item)} />
        <ProjectList
          projects={this.state.selected === 'All' ? this.projects : this.projects.filter(item => item.category === this.state.selected)}
        />
      </>
    )
  }
}
