import React from 'react';
import blog1 from '../../../Assets/blog/blog1.png'
import blog2 from '../../../Assets/blog/blog1.jpg'
import blog3 from '../../../Assets/blog/blog3.png'
import blog4 from '../../../Assets/blog/blog5.png'
import blog6 from '../../../Assets/blog/blog7.png'
import Footer from '../../Shared/Footer';
const Blogs = () => {
    return (
        <div>
            <div className='mx-4'>
                <div class="card lg:card-side bg-slate-100 shadow-xl mt-8">
                    <figure><img className='w-72' src={blog1} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                        <p>
                            In React, function components and PureComponent provide two different ways of optimizing React apps at the component level.
                            Function components prevent constructing class instances while reducing the overall bundle size as it minifies better than classes.
                            On the other hand, in order to optimize UI updates, we can consider converting function components to a PureComponent class (or a class with a custom shouldComponentUpdate method). However, if the component doesn't use state and other life cycle methods, the initial render time is a bit more complicated when compared to function components with potentially faster updates.
                        </p>

                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>

                <div class="card lg:card-side bg-slate-100 shadow-xl mt-8">
                    <figure><img className='w-72' src={blog2} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                        <p>
                            <b>Local (UI) state:</b> Local state is data we manage in one or another component.
                            Local state is most often managed in React using the useState hook.
                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs. <br />

                            <b>Global (UI) state: </b> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                            Sometimes state we think should be local might become global.
                        </p>

                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>


                <div class="card lg:card-side bg-slate-100 shadow-xl mt-8">
                    <figure><img className='w-72' src={blog3} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">How does prototypical inheritance work?</h2>
                        <p>
                            Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.
                            <br />
                            <br />
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                        </p>

                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>


                <div class="card lg:card-side bg-slate-100 shadow-xl mt-8">
                    <figure><img className='w-72' src={blog4} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                        <p>
                            Array destructuring lets us assign elements in an array to variables of our choosing. The names selectedRoom and setSelectedRoom are arbitrary and our choice, although it's common to start the variable name for the second element, the updater function, with set. <br />
                            If you want to set an initial value for the variable, pass the initial value as an argument to the useState function. When React first runs your component, useState will return the two-element array as usual but will assign the initial value to the first element of the array,
                        </p>

                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>


                <div class="card lg:card-side bg-slate-100 shadow-xl my-8">
                    <figure><img className='w-72' src={blog6} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                        <p>
                            <b>Unit Test</b> This is a type of testing which is done by software developers in which the smallest testable module of an application - like functions, procedures or interfaces - are tested to ascertain if they are fit to use.
                            <br />
                            <b>Objective</b> The main objective of unit testing is to ensure that each individual part is working well and as it's supposed to work. The entire system will only be able to work well if the individual parts are working well. Unit testing is performed by the software developers themselves.
                        </p>

                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;