import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
   
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"


  
  const PageHandling = () => {
    return (
        <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
           1
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      
    )
  }
  
  export default PageHandling