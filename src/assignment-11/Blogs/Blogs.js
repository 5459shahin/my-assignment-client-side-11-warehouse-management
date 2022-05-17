import React from 'react';

const Blogs = () => {
    return (
        <div className="container my-5">
            <div className="row g-4">
                <h1 className="text-center">Blogs</h1>
                <div className="col-lg-6">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                Difference between javascript and node js
                            </h5>
                            <p className="card-description">
                                <strong>Javascript:</strong> <br />
                                জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ল্যাংগুয়েজ যা একটি ওয়েবসাইটে
                                স্ক্রিপ্ট লেখার জন্য ব্যবহৃত হয়। <br />
                                জাভাস্ক্রিপ্ট শুধুমাত্র ব্রাউজারে চালানো যায়। <br />
                                এটি মূলত ক্লায়েন্ট-সাইডে ব্যবহৃত হয়। <br />
                                জাভাস্ক্রিপ্ট যেকোনো ব্রাউজারের ইঞ্জিনে রান করতে পারে যেমন
                                Chrome এর V8 ইঞ্জিন এবং Firefox এর Spidermonkey। <br />
                                জাভাস্ক্রিপ্টের কিছু লাইব্রেরী হলো React Js, Vue Js ইত্যাদি।{" "}
                                <br />
                                <br />
                                <strong>Node JS:</strong> <br /> নোড জেএস একটি জাভাস্ক্রিপ্ট
                                রানটাইম এনভায়রনমেন্ট। আমরা NodeJS এর সাহায্যে ব্রাউজারের বাইরে
                                Javascript চালাতে পারি। এটি বেশিরভাগই সার্ভার-সাইডে ব্যবহৃত হয়।
                                V8 হল node.js এর ভিতরে জাভাস্ক্রিপ্ট ইঞ্জিন যা জাভাস্ক্রিপ্ট
                                পার্স করে এবং চালায়। কিছু নোড Js মডিউল হল Lodash, express
                                ইত্যাদি। এই মডিউলগুলি npm থেকে import করতে হয়।
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                When should you use nodejs and when should you use mongodb?
                            </h5>
                            <p className="card-description">
                                NodeJS এবং MongoDB দুটি ভিন্ন প্রক্রিয়া। এখানে আমি যতটা সম্ভব
                                সহজভাবে ব্যাখ্যা করার চেষ্টা করেছি: নোড জেএস একটি জাভাস্ক্রিপ্ট
                                রানটাইম এনভায়রনমেন্ট। এটি আসলে জাভাস্ক্রিপ্টকে সার্ভারের বাইরে
                                চলতে সাহায্য করে। এটি সার্ভার-সাইড বিকাশে ব্যবহৃত হয়। কিন্তু,
                                MongoDB একটি NoSQL ডাটাবেজ যা নথি-ভিত্তিক। এটি JSON নথি হিসাবে
                                ডেটা উপস্থাপন করে। এটি ডেটা সঞ্চয় করতে ব্যবহৃত হয়। সারাংশ হল
                                MongoDB হল একটি ডাটাবেস যেখানে আমরা ডেটা সঞ্চয় করতে পারি এবং
                                NodeJS আমাদের ক্লায়েন্ট সাইটটিকে তার সার্ভার সাইট দ্বারা
                                ডাটাবেসের সাথে সংযুক্ত করতে সাহায্য করে। ধরুন আপনি একটি
                                ওয়েবসাইট তৈরি করছেন এবং ডেটা বা তথ্য সংরক্ষণ করার জন্য আপনার
                                একটি ডাটাবেস প্রয়োজন এখানে আপনি MongoDB ব্যবহার করতে পারেন
                                কিন্তু MongoDB এর সাথে সংযুক্ত হতে আপনার একটি সংযোগকারী
                                প্রয়োজন, তাই এখানে আপনি NodeJS ব্যবহার করতে পারেন।
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                Differences between sql and nosql databases.
                            </h5>
                            <p className="card-description">
                                <strong>SQL:</strong> <br />
                                SQL হলো রিলেশনাল ডাটাবেজ ম্যানেজমেন্ট সিস্টেম বা RELATIONAL
                                DATABASE MANAGEMENT SYSTEM সংক্ষেপে RDBMS <br />
                                SQL ডাটাবেজ শ্রেণীবদ্ধ ডেটা সঞ্চয়ের জন্য উপযুক্ত নয়। <br />
                                SQL কমপ্লেক্স কোয়েরির জন্য সবচেয়ে উপযুক্ত। <br />
                                SQL ঊর্ধ্বাধভাবে মাপযোগ্য। <br />
                                SQL ACID প্রোপারটি অনুসরণ করে। <br />
                                <br />
                                <strong>NoSQL:</strong> <br />
                                NoSQL হলো নন-রিলেশনাল বা ডিস্ট্রিবিউটেড ডাটাবেজ সিস্টেম। <br />
                                NoSQL ডাটাবেজ শ্রেণীবদ্ধ ডেটা সঞ্চয়ের জন্য সবচেয়ে উপযুক্ত।{" "}
                                <br />
                                NoSQL ডাটাবেজ কমপ্লেক্স কোয়েরির জন্য এত ভাল নয়। <br />
                                NoSQL অনুভূমিকভাবে মাপযোগ্য। <br />
                                NoSQL CAP অনুসরণ করে (সঙ্গতি, প্রাপ্যতা, পার্টিশন সহনশীলতা){" "}
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                What is the purpose of jwt and how does it work?
                            </h5>
                            <p className="card-description">
                                এখানে কিছু পরিস্থিতি রয়েছে যেখানে JSON ওয়েব টোকেন দরকারি:{" "}
                                <br />
                                Authorization: অনুমোদন: এটি JWT ব্যবহারের জন্য সবচেয়ে সাধারণ
                                দৃশ্য। <br />
                                ব্যবহারকারী একবার লগ ইন করলে, পরবর্তী প্রতিটি অনুরোধে JWT
                                অন্তর্ভুক্ত হবে, যা ব্যবহারকারীকে সেই টোকেনের সাথে অনুমোদিত রুট,
                                পরিষেবা এবং সংস্থানগুলি অ্যাক্সেস করতে দেয়। <br />
                                <br />
                                Information Exchange: JSON ওয়েব টোকেনগুলি পক্ষের মধ্যে নিরাপদে
                                তথ্য প্রেরণের একটি ভাল উপায়৷ কারণ JWT-তে স্বাক্ষর করা যেতে
                                পারে-উদাহরণস্বরূপ, পাবলিক/প্রাইভেট কী জোড়া ব্যবহার করে-আপনি
                                নিশ্চিত হতে পারেন যে প্রেরকরা কে বলেছে তারা। <br />
                                <br />
                                একটি JWT হল একটি স্ট্রিং যা তিনটি অংশ নিয়ে গঠিত, বিন্দু (.)
                                দ্বারা পৃথক করা হয় এবং বেস64 ব্যবহার করে ক্রমিক করা হয়।
                                সবচেয়ে সাধারণ সিরিয়ালাইজেশন ফরম্যাটে, কমপ্যাক্ট
                                সিরিয়ালাইজেশন, JWT দেখতে এরকম কিছু দেখায়:
                                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIYF0IjoxNTE2MjM5MDIFQF0IjoxNTE2MjM5MDIYFQYFQWSQ2SFQWSQ563{" "}
                                <br />
                                <br />
                                একবার ডিকোড করা হলে, আপনি দুটি JSON স্ট্রিং পাবেন: <br />
                                <br />
                                ১। The header and the payload. <br />
                                ২। The signature. <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;