import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow,
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
          baseURL: "https://social-network.samuraijs.com/api/1.0/",
          headers: {
            "API-KEY": "cd15c007-31db-47b6-b737-d5df452f1ba3",
          },
        }
      )
      .then((response) => {
        // debugger;
        this.props.toggleIsFetching(false);
        window.response = response;
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
          baseURL: "https://social-network.samuraijs.com/api/1.0/",
          headers: {
            "API-KEY": "cd15c007-31db-47b6-b737-d5df452f1ba3",
          },
        }
      )
      .then((response) => {
        // debugger;
        this.props.toggleIsFetching(false);
        window.response = response;
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        { this.props.isFetching ?
             <Preloader />
            :
            <Users
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged}
              users={this.props.users}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
            />
        }
      </>

    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

/*let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};*/

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,toggleIsFetching})(UsersContainer);
