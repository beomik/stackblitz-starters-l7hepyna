"use client";

import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Input } from "../components/input";

export default function AllCareLandingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-green-50 py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">어린이부터 어르신까지, 모두를 위한 식자재</h1>
        <p className="text-lg mb-6">전국 어린이집·요양원·병원·학교·기업에 믿고 납품하는 올케어</p>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <a href="https://order.hgreenfood.com/nx-web/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/hgreenfood-kids.png" 
                alt="현대그린푸드 Kids" 
                className="w-40 h-24 object-contain mb-2 cursor-pointer" 
              />
            </a>
            <Button onClick={() => window.open('https://order.hgreenfood.com/nx-web/', '_blank')}>현대그린푸드 - Kids</Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a href="https://order.hgreenfood.com/nx-web/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/hgreenfood-healthcare.png" 
                alt="현대그린푸드 Healthcare" 
                className="w-40 h-24 object-contain mb-2 cursor-pointer" 
              />
            </a>
            <Button onClick={() => window.open('https://order.hgreenfood.com/nx-web/', '_blank')} variant="outline">현대그린푸드 - Healthcare</Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a href="https://onlyonefoodnetfo.ifresh.co.kr/login" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/cj-kids.png" 
                alt="CJ프레시웨이 Kids" 
                className="w-40 h-24 object-contain mb-2 cursor-pointer" 
              />
            </a>
            <Button onClick={() => window.open('https://onlyonefoodnetfo.ifresh.co.kr/login', '_blank')}>CJ프레시웨이 - Kids</Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a href="https://onlyonefoodnetfo.ifresh.co.kr/login" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/cj-healthcare.png" 
                alt="CJ프레시웨이 Healthcare" 
                className="w-40 h-24 object-contain mb-2 cursor-pointer" 
              />
            </a>
            <Button onClick={() => window.open('https://onlyonefoodnetfo.ifresh.co.kr/login', '_blank')} variant="outline">CJ프레시웨이 - Healthcare</Button>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-3xl mb-2">🛡️</div>
          <h3 className="text-xl font-semibold mb-1">안전한 공급</h3>
          <p>위생 인증과 철저한 품질 관리</p>
        </div>
        <div>
          <div className="text-3xl mb-2">🌱</div>
          <h3 className="text-xl font-semibold mb-1">깨끗한 재료</h3>
          <p>신선한 산지 직송, 무첨가 원칙</p>
        </div>
        <div>
          <div className="text-3xl mb-2">🍽️</div>
          <h3 className="text-xl font-semibold mb-1">맛있는 한 끼</h3>
          <p>연령별 맞춤식 제공 가능</p>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">납품 대상별 맞춤 식자재</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">🧒 어린이집</h3>
              <p>알레르기 케어, 식감 조절 식단</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">👵 요양원</h3>
              <p>부드러운 식재료, 저염식 기준</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">🏥 병원</h3>
              <p>HACCP 기반 고품질 식자재</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">🏫 학교·기업</h3>
              <p>대량 납품 및 급식 연계</p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-6 text-center">
        <p className="mb-2">© 2025 올케어 AllCare Co., Ltd.</p>
        <p>사업자등록번호: 629-81-02055 | 고객센터: 02-6385-0101</p>
      </footer>
    </div>
  );
}