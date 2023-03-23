Hey,

Below are 2 questions each for backend and frontend. Please code both and send it to team@bling.cloud. Please attach your files to email and clearly mention the question number.

Backend Question:

Write a code for Server Allocation:


Part 1:
				
Suppose our company allocates servers when required and deallocates servers when not required. All company servers are numbered. A system maintains the list of servers currently allocated (or in use). If a new server is to be allocated, we check the list of existing server allocation and assign the lowest numbered server currently not in use.


Example:


[2,7,1,5,9] -> Allocate next_server -> 3.
[] -> 1
[1,2,3] -> 4
[2,3,4] -> 1


Write a function nextServerNumber(Array).




Part 2:


Suppose a company has an office in different regions like north, south, etc. Company employees request servers based on a region that they are working in. Write allocation and deallocation functions. Allocation will check the next server number to be assigned (Use Part 1 to get the next server) in the specific region the user has requested and return it.
Deallocate will deallocate the server passed to it.


allocate(south) -> result -> south1
allocate(south) -> result -> south2
allocate(north) -> result -> north1


Deallocate (south1) 


allocate(south) -> south1
allocate(south) -> south3

