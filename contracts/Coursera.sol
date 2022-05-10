// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Coursera {

    enum State {Purchased, Activated, Deactivated }

    struct Course {
        uint id;
        uint price;
        bytes32 proof;
        address owner;
        State state;
    }

    function purchaseCourse(
        bytes16 courseId,
        bytes32 proof
    )
    external payable return(bytes32)
    {
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));
        return courseHash;
    }

}
