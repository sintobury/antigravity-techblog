---
title: 'Next.js 14 기능 심층 분석'
date: '2023-11-27'
excerpt: 'Server Actions, Partial Prerendering 등 Next.js 14의 최신 기능을 살펴봅니다.'
category: 'Development Info'
---

Next.js 14는 모던 웹 애플리케이션 개발을 간소화하는 다양한 새로운 기능과 개선 사항을 제공합니다. 이 글에서는 주요 추가 사항 중 일부를 살펴보겠습니다.

## Server Actions

Server Actions를 사용하면 서버에서 직접 비동기 코드를 실행할 수 있습니다. 간단한 데이터 변경을 위해 별도의 API 엔드포인트를 만들 필요가 없습니다.

### 동작 방식

`'use server'` 지시문을 사용하여 함수를 정의하고 컴포넌트에서 직접 호출할 수 있습니다.

### 장점

- **데이터 변경 단순화**: 별도의 API 라우트가 필요 없습니다.
- **점진적 향상**: JavaScript 없이도 작동합니다.
- **타입 안전성**: 인자와 반환 값이 완전히 타이핑됩니다.

## Partial Prerendering

Partial Prerendering은 동일한 라우트에서 정적 렌더링과 동적 렌더링을 결합하는 실험적인 기능입니다.

### 문제점

기존에는 페이지가 전체적으로 정적이거나 전체적으로 동적이었습니다. 이는 하나의 동적 컴포넌트가 전체 페이지의 캐싱을 방해할 수 있음을 의미했습니다.

### 해결책

Partial Prerendering을 사용하면 Next.js는 정적 셸을 즉시 제공하고 페이지의 동적 부분을 스트리밍할 수 있습니다.

## Metadata API

Metadata API를 사용하면 SEO와 웹 공유성을 개선하기 위해 애플리케이션 메타데이터(예: HTML `head` 요소 내부의 `meta` 및 `link` 태그)를 정의할 수 있습니다.

### 정적 메타데이터

`layout.js` 또는 `page.js` 파일에서 `metadata` 객체를 내보낼 수 있습니다.

### 동적 메타데이터

`generateMetadata` 함수를 사용하여 라우트 매개변수를 기반으로 메타데이터를 동적으로 가져올 수 있습니다.

## Routing Fundamentals

Next.js 13은 React Server Component를 기반으로 구축된 App Router를 도입했습니다.

### 파일 시스템 기반 라우팅

라우트는 `app` 디렉토리의 파일 구조에 의해 정의됩니다.

### 레이아웃과 템플릿

- **Layouts**: 탐색 간에 유지되는 공유 UI입니다.
- **Templates**: 레이아웃과 유사하지만 탐색 시 새 인스턴스가 마운트됩니다.

## 결론

Next.js 14는 웹 개발의 가능성을 계속 확장하며, 개발자 경험과 애플리케이션 성능을 모두 향상시키는 도구를 제공합니다.
