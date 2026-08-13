// src/components/ui/breadcrumbs/Breadcrumbs.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react'; // или любые другие иконки
import styles from './BreadCrumbs.module.css';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

// Маппинг путей к человекочитаемым названиям
const routeLabels: Record<string, string> = {
  'cooking-tips': 'Cooking tips',
  'recipes': 'Recipes',
  'about': 'About Us',
  'blog': 'Блог',
  'contact': 'Контакты',
  'profile': 'Профиль',
  // Добавьте свои маршруты
};

export const Breadcrumbs = () => {
  const pathname = usePathname();
  
  // Разбиваем путь на сегменты
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  // Строим хлебные крошки
  const breadcrumbs: BreadcrumbItem[] = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    const isCurrent = index === pathSegments.length - 1;
    
    return {
      label,
      href,
      isCurrent,
    };
  });

  // Если мы на главной - не показываем крошки
  if (pathname === '/' || pathname === '') {
    return null;
  }

  return (
    <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
      <ol className={styles.breadcrumbList}>
        {/* Главная страница */}
        <li className={styles.breadcrumbItem}>
          <Link href="/" className={styles.breadcrumbLink}>
            <Home size={16} />
            <span className={styles.homeLabel}>Main Page</span>
          </Link>
          {/* <ChevronRight size={16} className={styles.separator} /> */}
        </li>

        {/* Остальные крошки */}
        {breadcrumbs.map((item, index) => (
          <li 
            key={item.href} 
            className={`${styles.breadcrumbItem} ${item.isCurrent ? styles.active : ''}`}
          >
            {item.isCurrent ? (
              <span className={styles.breadcrumbCurrent}>{item.label}</span>
            ) : (
              <>
                <Link href={item.href} className={styles.breadcrumbLink}>
                  {item.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight size={16} className={styles.separator} />
                )}
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};