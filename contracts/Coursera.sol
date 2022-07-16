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

    mapping(bytes32 => Course) private ownedCourses;

    mapping(uint => bytes32) private ownedCourseHash;

    uint private totalOwnedCourses;

    address payable private owner;

    constructor(){
        setContractOwner(msg.sender);
    }


    error CourseHasOwner();
    error OnlyOwner();

    modifier onlyOwner(){
        if(msg.sender != getContractOwner()){
            revert OnlyOwner();
        }
        _;
    }

    function purchaseCourse( bytes16 courseId, bytes32 proof ) external payable{
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));

        if(hasCourseOwnership(courseHash)){
            revert CourseHasOwner();
        }

        uint id = totalOwnedCourses++;
        ownedCourseHash[id] = courseHash;
        ownedCourses[courseHash] = Course({
            id: id,
            price: msg.value,
            proof: proof,
            owner: msg.sender,
            state: State.Purchased
        });
    }

    function transferOwnerShip(address newOwner) external onlyOwner{
        setContractOwner(newOwner);
    }
    
    function getCourseCount() external view returns(uint){
        return totalOwnedCourses;
    }

    function getCourseHash(uint index) external view returns(bytes32){
        return ownedCourseHash[index];
    }

    function getContractOwner() public view returns(address){
        return owner;
    }

    
    function getCouseByHash(bytes32 couseHash) external view returns(Course memory){
        return ownedCourses[couseHash];
    }

    function setContractOwner(address newOwner) private{
        owner = payable(newOwner);
    }

    function hasCourseOwnership(bytes32 courseHash) private view returns(bool){
        return ownedCourses[courseHash].owner == msg.sender;
    }


} 
