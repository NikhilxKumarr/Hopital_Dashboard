import Head from 'next/head';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Card from '../components/Card';

const sections = [
  "Regulatory Documents", "Commercial Documents", "External Contract",
  "Owner Documents", "Service Price List", "CME and Medical Training Records",
  "HPL Applications", "Human Resources", "Facility Policy",
  "Clinical Guideline", "Inspection Checklist", "Forms and Daily Checklist",
  "Key Performance Indicator", "Audit Reports", "Rooms and Infrastructure"
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Hospital Dashboard</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-100">
          <Nav />
          <Header />
          <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((title) => (
              <Card key={title} title={title} />
            ))}
          </main>
        </div>
      </div>
      <MobileNav />
    </>
  );
}