import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useTodosData, useDeleteTodo } from "../../hooks/Todo";
import './Home.css'

export const Home = () => {
  const onSuccess = (res) => {
    console.log("Perform side affect after data fetching");
  };
  const onError = () => {
    console.log("Perform side affect after encountering error");
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
  useTodosData(onSuccess, onError);
  //
  const { mutate: deleteMethod } = useDeleteTodo();

  const deleteTodo = (id) => {
    deleteMethod(id);
  };

  //   cachetime : default time 5min
  if (isLoading || isFetching) {
    return <h2 className="todoContainer">Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div className="todoContainer">
      <button onClick={refetch} className="getButton">Get Contact</button>
      {data?.data.map((contact) => {
        return (
          <div key={contact.id} className="mainDiv">
            <p className="nameText"> <Link to={`/contact/${contact.id}`}>{`Name : ${contact.name}`}</Link></p>
           
            <p  className="nameText">{`Task Number : ${contact.number}`}</p>
            <p  className="nameText">{`Task : ${contact.task}`}</p>
            <button
            className="getButton"
              onClick={() => {
                deleteTodo(contact.id);
              }}
            
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
