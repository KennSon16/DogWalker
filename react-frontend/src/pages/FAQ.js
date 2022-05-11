import React from "react";

const FAQ = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-blue-800">
      <h1 className="block text-9xl uppercase font-black">FAQ Page</h1>
      <div class="block">
        <div class="p-2 space-y-4">
        <div class="bg-gray-100 rounded overflow-hidden shadow">
          <h3 class="font-bold">Can I recover a post that I deleted?</h3>
          No, once you delete a post, you can't recover it.
        </div>
        <div class="bg-gray-100 rounded overflow-hidden shadow">
          <h3 class="font-bold">How can I add filters to my photos?</h3>
          At the moment we haven't developed that feature, but it's coming soon!
        </div>
        <div class="bg-gray-100 rounded overflow-hidden shadow">
          <h3 class="font-bold">Can I link my Titan account to this page?</h3>
          No, this community is comprised of Titan alumni  who may not have Titan account anymore.
          Since Titan accounts won't last after you graduate from CSUF but the accounts in this page
          still do, please create a separate account for this page so that you can share many
          activities as a Titan even after graduation.
        </div>
        <div class="bg-gray-100 rounded overflow-hidden shadow">
          <h3 class="font-bold">Can I see my friend's profiles in class 2019?</h3>
          On the search bar, enter "class 2019" and other keywords to see a list of alumni profiles
          from class 2019 (only if they have registered on this page).
        </div>
        <div class="bg-gray-100 rounded overflow-hidden shadow">
          <h3 class="font-bold">Can I find a job on here?</h3>
          This page wasn't built for career opportunities, however you can make connection with other
          members as a bridge to find a job.
        </div>
        <div class="bg-gray-100 rounded overflow-hidden shadow">
          <h3 class="font-bold">How can I report a post that provokes division, or contains inappropriate content?</h3>
          Titan Talks always tries to create a healthy and constructive exchange environment.
          Inappropriate comments or posts will be removed via email reports sent to admin.
        </div>
        <div class="bg-gray-100 rounded overflow-hidden shadow">
          <h3 class="font-bold">How do I contact you?</h3>
          You can reach us at +1 202-862-6071 or you can email us at TitanTalks@gmail.com
        </div>
        <div class="bg-gray-100 rounded overflow-hidden shadow">
          <h3 class="font-bold">How do I sign up?</h3>
          Easy! All you have to do is provide your email and create a unique password in the sign up page.
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
