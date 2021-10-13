### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?  
React Router allows a mapping between a URL path and the components that a React app renders. This allows for client-side routing where the front end moves between different pages which are reflected in the URL bar.

- What is a single page application?  
A single page application is one that used client-side routing. This is in contrast to server-side routing where a page request is sent to the server which sends back the HTML to render.

- What are some differences between client side and server side routing?  
Client side routing doesn't require a page refresh or server load. All of the script to create the application is sent from the server on the first request and then the client decides what is shown.  

- What are two ways of handling redirects with React Router? When would you use each?  
You can use a Redirect component. You can also use the useHistory hook which pushes a path into the window hsitory. The latter will include the original page in history. This means that the first method of using Redirect should be used to take a user to prevent a user from going to a particular page. The latter should be used when the first page can be in the history. 

- What are two different ways to handle page-not-found user experiences using React Router?   
You can include a catch-all Route component at the bottom of a Switch component which sends users to a NotFound component. You can also use a Redirect to a NotFound component.

- How do you grab URL parameters from within a component using React Router?  
URL parameters are indicated in the URL path with a /:param. THen parameters are accessed with the useParams hook. 

- What is context in React? When would you use it?  
Context allows for data that can be used across an application. You would use it when you want to access a prop from a parent in a distant child, rather than having to pass it down through several child components.

- Describe some differences between class-based components and function
  components in React.  
Class-based components are written to extend React-Component. Class components have a render method describing what the compoent should render. They don't use state. State is initialized in the constructor. It is then changed with the instance method setState, which updates the entire state object. Event listeners often need to be bound to this in the constructor. Life cycle methods allow this to happen at times other than when a component is rendered.

- What are some of the problems that hooks were designed to solve?  
Function based components were initially stateless. This is why hooks were designed. This allows for shared code among components and reduces duplication.
